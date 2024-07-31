export type PostProps = { id: number; title: string; body: string };


export type UserType = {name: string; sessionId: number}

export type StateType = {theme: string; fontSize: number}

export type ColorActionType = {
  type: "CHANGE_THEME"
}
export type SizeActionType = {
  type: "CHANGE_FONTSIZE";
  payload: number
}
// export type SizeActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload: number
// }

export type ItemProps<T> = {
  id: number,
  title: string,
  extra: T[]
}