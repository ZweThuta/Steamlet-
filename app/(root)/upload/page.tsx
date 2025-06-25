"use client";
import Fileinput from "@/components/Fileinput";
import FormField from "@/components/FormField";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { ChangeEvent, FormEvent, useState } from "react";

const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!video.file || !thumbnail.file) {
        setError("Please select video and thumbnail!");
        return;
      }
      if (!formData.title || !formData.description) {
        setError("Please enter the video title and description!");
        return;
      }
    } catch (error) {
      console.log("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a Video</h1>
      {error && <div className="error-field">{error}</div>}
      <form
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
        onSubmit={handleSubmit}
      >
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a title for your video"
        />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          as="textarea"
          placeholder="Describe about your video"
        />
        <Fileinput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />
        <Fileinput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />

        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
};

export default page;
