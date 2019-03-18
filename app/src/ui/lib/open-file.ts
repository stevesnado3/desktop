import { shell } from '../../lib/app-shell'

export async function openFile(
  fullPath: string,
  postError: (error: Error) => Promise<void>
): Promise<void> {
  const result = await shell.openExternal(`file://${fullPath}`)

  if (!result) {
    const error = {
      name: 'no-external-program',
      message: `Unable to open file ${fullPath} in an external program. Please check you have a program associated with this file extension`,
    }
    await postError(error)
  }
}
