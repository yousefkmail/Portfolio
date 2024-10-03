import { createClient, EntryFieldTypes } from "contentful";

export type AboutPageSkeleton = {
  contentTypeId: "about";
  fields: {
    title: EntryFieldTypes.Text;
    texts: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AboutPageParagraphSkeleton>
    >;
  };
};

export type AboutPageParagraphSkeleton = {
  contentTypeId: "aboutParagraph";
  fields: {
    text: EntryFieldTypes.Text;
  };
};

export type ProjectSkeleton = {
  contentTypeId: "project";
  fields: {
    url: EntryFieldTypes.Text;
    thumbnail: EntryFieldTypes.AssetLink;
    name: EntryFieldTypes.Text;
    projectLinkIcon: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ProjectLinkIconSkeleton>
    >;
  };
};

export type ProjectLinkIconSkeleton = {
  contentTypeId: "projectLinkIcon";
  fields: {
    url: EntryFieldTypes.Text;
    icon: EntryFieldTypes.AssetLink;
  };
};

export const contnentfulClient = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  space: import.meta.env.VITE_COTENTFUL_SPACE,
});
