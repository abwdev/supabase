import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { post } from 'lib/common/fetch'
import { API_URL } from 'lib/constants'

export type VercelIntegrationCreateVariables = {
  code: string
  configurationId: string
  orgId: number
  metadata: { [key: string]: string }
  source: string
  // teamId is only present when a team is being installed
  // personal accounts (hobby) will not have this value defined
  teamId?: string
}

export async function createVercelIntegration({
  code,
  configurationId,
  orgId,
  metadata,
  source,
  teamId,
}: VercelIntegrationCreateVariables) {
  console.log('payload', { code, configurationId, orgId, metadata, source, teamId })
  const response = await post(`${API_URL}/integrations/vercel`, {
    code,
    configuration_id: configurationId,
    organization_id: orgId,
    metadata,
    source,
    teamId,
  })
  if (response.error) {
    throw response.error
  }

  return response
}

type VercelIntegrationCreateData = Awaited<ReturnType<typeof createVercelIntegration>>

export const useVercelIntegrationCreateMutation = ({
  onSuccess,
  ...options
}: Omit<
  UseMutationOptions<VercelIntegrationCreateData, unknown, VercelIntegrationCreateVariables>,
  'mutationFn'
> = {}) => {
  console.log('mutating')
  return useMutation<VercelIntegrationCreateData, unknown, VercelIntegrationCreateVariables>(
    (vars) => createVercelIntegration(vars),
    {
      async onSuccess(data, variables, context) {
        await onSuccess?.(data, variables, context)
      },
      ...options,
    }
  )
}