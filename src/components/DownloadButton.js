import React from 'react'

import { FaDownload } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const DownloadButton = () => {
    const expensesData = useSelector((state)=>state.expense.expenses);

    const makeCSV = (rows) => {
        if(rows.length === 0) return "";

         // Extract headers from the object keys
        const headers = Object.keys(rows[0]);

         // Map rows to CSV format
        const csvRows = rows.map(row => 
            headers.map(header => JSON.stringify(row[header] || '')).join(",")
        );
 
         // Combine headers and rows
        return [headers.join(","), ...csvRows].join("\n");
    }


    const handleDownloadFile = () => {
        console.log("download");
        const csvContent = makeCSV(expensesData);

        const blob = new Blob([csvContent], {type: "text.csv"});

        const href = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href =href;
        link.download = "file.csv";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(href)

        
    }

    return (
    <div style={{ marginRight:"20px"}}> 
        
        <FaDownload onClick={handleDownloadFile}/>   

    </div>
    )
}

export default DownloadButton