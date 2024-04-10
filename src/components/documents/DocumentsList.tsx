import React, { useMemo, type FC } from "react";
import type { Document } from "@/types";
import { Grid } from "@mantine/core";
import { DocumentItem } from ".";

interface DocumentsListProps {
  documents: Document[];
}

const DocumentsList: FC<DocumentsListProps> = ({ documents }) => {

  const items = useMemo(() => documents.map((document, index) => {
    return (
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={index}>
        <DocumentItem document={document} />
      </Grid.Col>
    );
  }), [documents])

  return (
    <div className="w-full ">
      <Grid>
        {items}
      </Grid>
    </div>
  );
};

export default DocumentsList;
