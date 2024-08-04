import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SafeView from "@/src/shared/SafeView";

export default function HomeScreen() {
  return (
    <SafeView>
      <SimpleHeader title="Publicaciones" />
    </SafeView>
  );
}
