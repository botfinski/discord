"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";

type FileUploadProps = {
	onChange: (url?: string) => void;
	value: string;
	endpoint: "messageFile" | "serverImage";
};

export function FileUpload({ onChange, value, endpoint }: FileUploadProps) {
	const fileType = value?.split(".").pop();

	if (value && fileType !== "pdf") {
		return (
			<div className="relative h-20 w-20">
				<Image fill src={value} alt="Upload" className="rounded-full" />
				<button
					onClick={() => onChange("")}
					className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
					type="button"
				>
					<X className="h-4 w-4" />
				</button>
			</div>
		);
	}

	return (
		<UploadDropzone
			endpoint={endpoint}
			onClientUploadComplete={res => onChange(res?.[0].url)}
			onUploadError={(error: Error) => console.error(error.message)}
			appearance={{
				label: "text-indigo-500",
				button: "ut-uploading:cursor-not-allowed bg-indigo-500 after:bg-indigo-700",
			}}
		/>
	);
}
