import Alpine from '../alpine'

Alpine.store('layout', {
  fullscreen: false,
  notifs: [],
  view: 'index',  // Use for pseudo router

  toggleFullscreen() {
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  },

  notify(text: string, type: string = '') {
    const notif = { text, type }
    this.notifs.push(notif)
    setTimeout(() => this.notifs.shift(), 4000)
  },

})

window.addEventListener('fullscreenchange', () => (<any>Alpine.store('layout')).fullscreen = !!document.fullscreenElement)
