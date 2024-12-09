import { OrganizationList } from '@clerk/nextjs'

export default function OrganizationListPage() {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectPersonalUrl="/user/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  )
}