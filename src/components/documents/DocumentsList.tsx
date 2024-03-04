import React from "react";
import type { Document } from "@/types";
import { Grid } from "@mantine/core";
import { DocumentItem } from ".";

interface DocumentsListProps {
  documents: Document[];
}
const DocumentsList = ({ documents }: DocumentsListProps) => {
  return (
    <div className="w-full ">
      <Grid>
        {documents.map((document) => {
          return (
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={document.id}>
              <DocumentItem document={document} />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default DocumentsList;
