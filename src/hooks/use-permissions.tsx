import {
  User,
  Action,
  PermissionDialect,
  Subject,
  PERMISSIONS,
  permissionSplitIdentifier,
} from '@/config/permissions'
import useAuthStore from '@/store/use-auth'

const hasPermissionFxn = (user: User, permissions: PermissionDialect[]) => {
  return permissions.every((permission) => {
    const [subject, action] = permission.split(permissionSplitIdentifier) as [
      Subject,
      Action,
    ]

    const permissionSubject = PERMISSIONS[user.role][subject]

    if (!permissionSubject) {
      return false
    }

    return Boolean(permissionSubject[action])
  })
}

function usePermissions({
  permissions,
  condition = true,
}: {
  permissions: PermissionDialect[]
  condition?: boolean
}) {
  const user = useAuthStore((state) => state.user)

  const hasPermission = hasPermissionFxn(user, permissions) && condition

  return { hasPermission }
}

export default usePermissions
