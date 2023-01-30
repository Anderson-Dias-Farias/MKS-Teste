import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Adp } from "./styles";

export default function Variants() {
  return (
    <Adp>
      <Stack
        spacing={0.5}
        style={{ alignItems: "center", marginBottom: "20px" }}
      >
        <Skeleton variant="rectangular" width={240} height={158} />

        <Skeleton variant="rounded" width={240} height={20} />
        <Skeleton variant="rounded" width={240} height={20} />
        <Skeleton variant="rounded" width={240} height={30} />
      </Stack>
    </Adp>
  );
}
