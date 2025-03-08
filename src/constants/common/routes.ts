class Routes {
  private readonly A_ROOT = '/-';

  // ** DASHBOARD ** //
  public readonly DASHBOARD = `${this.A_ROOT}/dashboard`;

  // ** STAGE ** //
  public readonly STAGES = `${this.A_ROOT}/stages`;

  // ** ATTACK ** //
  public readonly ATTACKS = `${this.A_ROOT}/attacks`;

  // ** PROTOTYPE ** //
  public readonly PROTOTYPES_ROOT = `${this.A_ROOT}/prototypes`;
  public readonly PROTOTYPES_BUTTONS = `${this.PROTOTYPES_ROOT}`;
  public readonly PROTOTYPES_TITLES = `${this.PROTOTYPES_ROOT}/titles`;
  public readonly PROTOTYPES_BUTTON_GROUPS = `${this.PROTOTYPES_ROOT}/button-groups`;
  public readonly PROTOTYPES_INPUTS = `${this.PROTOTYPES_ROOT}/inputs`;
  public readonly PROTOTYPES_TABLES = `${this.PROTOTYPES_ROOT}/tables`;
  public readonly PROTOTYPES_DRAWER = `${this.PROTOTYPES_ROOT}/drawer`;

  // ** MASTER ** //
  public readonly MASTER_ROOT = `${this.A_ROOT}/masters`;
  public readonly EXPANSIONS = `${this.MASTER_ROOT}`;
  public readonly TYPES = `${this.MASTER_ROOT}/types`;

  // ** POKEMON ** //
  public readonly POKEMON = `${this.A_ROOT}/pokemon`;

  // ** CARDS ** //
  public readonly CARDS = `${this.A_ROOT}/cards`;
  public readonly CARDS_CREATE = `${this.CARDS}/create`;
}

const routes = new Routes();

export default routes;
