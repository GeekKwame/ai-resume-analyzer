import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useState } from "react"
import { formatSize } from "~/lib/utils"

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const [file, setFile] = useState<File | null>(null);
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0] || null;
        setFile(selectedFile);
        onFileSelect?.(selectedFile);
    }, [onFileSelect])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            "application/pdf": [".pdf"]
        },
        maxSize: 20 * 1024 * 1024,
    })
    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()} className="p-4">
                <input {...getInputProps()} />

                <div className="space-y-4 cursor-pointer">
                    <div className="mx-auto flex flex-col items-center justify-center text-center gap-4">
                        <img src="/icons/info.svg" alt="upload" className="size-20" />

                        {file ? (
                            <div className="flex items-center space-x-3">
                                <img src="/images/pdf.png" alt="pdf" className="size-10" />
                                <div>
                                    <p className="text-lg text-gray-700 font-medium truncate">
                                        {file.name}
                                    </p>
                                    <p className="text-gray-500">{formatSize(file.size)}</p>
                                </div>
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