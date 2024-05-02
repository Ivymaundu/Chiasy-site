import { useState } from "react";
import axios from "axios";

export default function UploadImage() {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const handleUpload = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); 

        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post("http://127.0.0.1:8000/uploadfile", formData);
            console.log('File uploaded successfully:', response.data);
            return response.data.fileUrl;
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    };


    return (
        <>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Select Image</label>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFileChange}
                />
            </div>

        </>
    )
}