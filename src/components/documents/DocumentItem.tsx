import React, { useState, type FC } from "react";
import type { Document } from "@/types";
import { LoadingOverlay } from "@mantine/core";
import { formatDate } from "@/utils";
import useLang from "@/hooks/useLang";
interface ItemProps {
  document: Document;
}

const DocumentItem: FC<ItemProps> = ({ document }) => {
  const [loading, setLoading] = useState(false);
  const { currentLanguage } = useLang();
  return (
    <div className="px-2 py-4 bg-primary/10 overflow-hidden relative w-full">
      <a href={`/documents/${document.id}`} onClick={() => setLoading(true)}>
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <img
          src={document.featuredImage || "/home/about.webp"}
          className="px-3 w-full h-[350px] object-cover object-center"
          alt={document[`name${currentLanguage}` as keyof typeof document] as string}
        />
        <p className="px-3 mt-5 text-base font-bold line-clamp-1 ">{document[`name${currentLanguage}` as keyof typeof document] as string}</p>
        <p className="px-3 text-sm text-[#929292] font-semibold ">{formatDate(document.createdAt)}</p>
      </a>
    </div>
  );
};

export default DocumentItem;
