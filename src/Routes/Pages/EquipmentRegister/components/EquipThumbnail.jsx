import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const EquipThumbnail = () => {
  /* Router */
  /* State */

  /* Functions */
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  /* Hooks */

  /* Render */

  return (
    <div {...getRootProps()} className="equip-thumbnail-wrapper">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default EquipThumbnail;