import React, { useState } from "react";
import type { Document } from "@/types";
import Link from "next/link";
import { LoadingOverlay } from "@mantine/core";
interface ItemProps {
  document: Document;
}
const DocumentItem = ({ document }: ItemProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="px-2 py-4 bg-primary/10 overflow-hidden relative w-80 h-[450px]">
      <Link href={`/documents/${document.id}`} onClick={() => setLoading(true)}>
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <img
          src={document.featuredImage || "/home/about.png"}
          className="px-3 h-[85%] object-cover object-center"
          alt={document.name}
        />
        <p className="px-3 mt-5 text-base line-clamp-2 ">{document.name}</p>
      </Link>
    </div>
  );
};

export default DocumentItem;
