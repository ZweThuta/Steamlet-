import Image from "next/image";
import React from "react";

const Fileinput = ({
  id,
  label,
  accept,
  file,
  previewUrl,
  inputRef,
  onChange,
  onReset,
  type,
}: FileInputProps) => {
  return (
    <section className="file-input">
      <label htmlFor={id}>{label}</label>
      <input
        type="file"
        id={id}
        accept={accept}
        ref={inputRef}
        onChange={onChange}
        hidden
      />
      {!previewUrl ? (
        <figure onClick={() => inputRef?.current?.click()}>
          <Image
            src="/assets/icons/upload.svg"
            alt="upload"
            width={25}
            height={25}
          />
          <p>Upload to upload your video {id}</p>
        </figure>
      ) : (
        <div>
          {type === "video" ? (
            <video src={previewUrl} controls />
          ) : (
            <Image src={previewUrl} alt="preview image" fill />
          )}
          <button type="button" onClick={onReset}>
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={16}
              height={16}
            />
            {/* <p>{file?.name}</p> */}
          </button>
        </div>
      )}
    </section>
  );
};

export default Fileinput;
