import { useTheme } from "./react-contxt";
import { Theme } from "./Theme";

export default function MainPage() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} main`}>
      <Theme />
    </div>
  );
}
