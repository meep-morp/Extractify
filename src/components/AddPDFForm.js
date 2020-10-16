import React from "react";
import { useState } from "react";

const type = "application/pdf";

const AddPDFForm = props => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const type = "application/pdf";

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && type === selected.type) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
        console.log(file);
        console.log(selected);
    };

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {/* {file && <ProgressBar file={file} setFile={setFile} />} */}
            </div>
        </form>
    );
}

export default AddPDFForm;