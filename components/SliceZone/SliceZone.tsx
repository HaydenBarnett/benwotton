import { Video, Projects } from "../";
import type { ProjectProps } from "../";

export type SliceZoneProps = {
  slices?: any;
  projects?: ProjectProps[];
};

export const SliceZone = ({ slices, projects }: SliceZoneProps) => {
  return (
    <div className="slice">
      {slices.map((slice: any, i: number) => {
        switch (slice.slice_type) {
          case "video":
            return <Video key={i} url={slice.primary.video.embed_url} />;
          case "projects":
            if (!projects) return null;
            return <Projects key={i} projects={projects} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SliceZone;
