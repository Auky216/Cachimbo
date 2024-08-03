import React, { useState } from 'react';

function FileUploadForm() {
    const [university, setUniversity] = useState('');
    const [course, setCourse] = useState('');
    const [nickname, setNickname] = useState('');
    const [title, setTitle] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!file) {
            alert('Por favor, selecciona un archivo');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const fileContentBase64 = btoa(reader.result);

            const requestBody = {
                university,
                course,
                nickname,
                is_anonymous: isAnonymous,
                file_name: file.name,
                file_content: fileContentBase64,
                title
            };
            console.log(requestBody);
            /* fetch('test/api/library/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
            .then(response => console.log(response))
            .then(data => {
                alert('Archivo subido con éxito y registrado en DynamoDB');
            })
            .catch(error => {
                alert('Error al subir el archivo: ' + error.message);
            }); */
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div>
            <h1>Subir Archivo a S3 y Registrar en DynamoDB</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Universidad:
                    <input 
                        type="text" 
                        value={university} 
                        onChange={(e) => setUniversity(e.target.value)} 
                        required 
                    />
                </label>
                <br /><br />

                <label>
                    Curso:
                    <input 
                        type="text" 
                        value={course} 
                        onChange={(e) => setCourse(e.target.value)} 
                        required 
                    />
                </label>
                <br /><br />

                <label>
                    Nickname:
                    <input 
                        type="text" 
                        value={nickname} 
                        onChange={(e) => setNickname(e.target.value)} 
                    />
                </label>
                <br /><br />

                <label>
                    Título:
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </label>
                <br /><br />

                <label>
                    ¿Es anónimo?
                    <input 
                        type="checkbox" 
                        checked={isAnonymous} 
                        onChange={(e) => setIsAnonymous(e.target.checked)} 
                    />
                </label>
                <br /><br />

                <label>
                    Selecciona un archivo:
                    <input 
                        type="file" 
                        onChange={(e) => setFile(e.target.files[0])} 
                        required 
                    />
                </label>
                <br /><br />

                <button type="submit">Subir Archivo</button>
            </form>
        </div>
    );
}

export default FileUploadForm;
