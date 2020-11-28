export default function ({ store, redirect }) {
  // If the user is not authenticated
  debugger
  if (!store.state.user) {
    return redirect('/login')
  }
}
