export type Role = 'employee' | 'admin' | 'manager'
export type User = {
  role: Role
}
export type Subject = 'jobs' | 'settings'
export type Action = 'create' | 'view' | 'update' | 'delete'

export const permissionSplitIdentifier = ':'
type PermissionIdentifier = typeof permissionSplitIdentifier
export type PermissionDialect = `${Subject}${PermissionIdentifier}${Action}`

export type Permission = Record<
  Role,
  Partial<Record<Subject, Partial<Record<Action, boolean>>>>
>

export const PERMISSIONS: Permission = {
  admin: {
    jobs: {
      create: true,
      view: true,
      update: true,
      delete: true,
    },
    settings: {
      view: true,
      update: true,
      delete: true,
    },
  },
  employee: {
    jobs: {
      view: true,
      create: true
    },
  },
  manager: {
    jobs: {
      create: true,
      view: true,
      update: true,
    },
    settings: {
      view: true,
      update: true,
    },
  },
}
