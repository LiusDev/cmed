import React from "react";
import type { Document } from "@/types";
import { Grid } from "@mantine/core";
import { DocumentItem } from ".";

interface DocumentsListProps {
  documents: Document[];
}
const DocumentsList = ({ documents }: DocumentsListProps) => {
  return (
    <div className="w-full py-20">
      <Grid>
        {documents.map((document) => {
          return (
            <Grid.Col span={3}>
              <DocumentItem document={document} />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default DocumentsList;
