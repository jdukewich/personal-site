import useBaseUrl from "@docusaurus/useBaseUrl";

type ImageProps = {
  maxWidth?: number;
  caption?: string;
  file: string;
};

export default function Image({ maxWidth = 300, caption, file }: ImageProps) {
  return (
    <div className="img-center">
      <figure style={{ maxWidth, textAlign: "center" }}>
        <img src={useBaseUrl(file)} alt={caption} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}
