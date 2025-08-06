import React from "react";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}
// Below is server component
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
    const { documentId } = await params;

    return <div>Document Id : {documentId} </div>;
};

export default DocumentIdPage;
