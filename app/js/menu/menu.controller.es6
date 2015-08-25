class MenuController {
  constructor($mdSidenav, $mdUtil) {
    this.$mdSidenav = $mdSidenav
    this.$mdUtil = $mdUtil

    this.toggleMenu = this.$mdUtil.debounce(() => {
      this.$mdSidenav('menu').toggle()
    }, 200)
  }
}
MenuController.$inject = ['$mdSidenav', '$mdUtil']

export default MenuController