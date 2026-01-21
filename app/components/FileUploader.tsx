import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useState } from "react"

const FileUploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
        console.log("File uploaded:", acceptedFiles[0]);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()} className="p-4">
                <input {...getInputProps()} />

                <div className="space-y-4 cursor-pointer">
                    <div className="mx-auto flex flex-col items-center justify-center text-center gap-4">
                        <img src="/icons/info.svg" alt="upload" className="size-20" />

                        {file ? (
                            <div className="text-lg">
                                <p className="font-semibold">{file.name}</p>
                                <p className="text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-lg text-gray-500">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>
                                    {" "}or drag and drop
                                </p>
                                <p className="text-lg text-gray-500">PDF (max 20 MB)</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileUploader