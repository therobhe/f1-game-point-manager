import React, { useEffect, useId } from 'react';

export interface StructuredDataProps {
    data: object | object[];
}

/**
 * Component for injecting JSON-LD structured data into the page.
 * Supports single schema or array of schemas with automatic deduplication.
 *
 * @param props.data - Schema.org structured data object(s)
 * @returns Script element with JSON-LD content
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
    const id = useId();
    const scriptId = `structured-data-${id}`;

    useEffect(() => {
        // Cleanup on unmount to prevent duplicate schemas
        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [scriptId]);

    const schemas = Array.isArray(data) ? data : [data];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`${scriptId}-${index}`}
                    id={`${scriptId}-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default StructuredData;
