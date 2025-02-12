import ContentSection from "../components/content-section";
import { PermissionsForm } from "./permission-form";

export default function SettingsPermissions() {
  return (
    <ContentSection
      title='Permissions'
      desc='Set the Permissions'
    >
      <PermissionsForm />
    </ContentSection>
  )
}
