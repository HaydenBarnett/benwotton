import { Video, Projects } from "../";

type SliceZoneProps = {
  slices?: any;
  projects?: any;
};

export const SliceZone = ({ slices, projects }: SliceZoneProps) => {
  return (
    <div className="slice">
      {slices.map((slice: any, i: number) => {
        switch (slice.slice_type) {
          case "video":
            return <Video key={i} url={slice.primary.video.embed_url} />;
          case "projects":
            return <Projects key={i} projects={projects} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SliceZone;
