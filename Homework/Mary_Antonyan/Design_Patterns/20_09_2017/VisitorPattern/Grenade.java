package visitorpattern;

public class Grenade extends Weapon {

    public Grenade(String name, double x, double y, double velocityX, double velocityY, double letality) {
        super(name, x, y, velocityX, velocityY, letality);
    }

    @Override
    public void damage(Soldier soldier) {
        soldier.accept(this);
    }

    @Override
    public void damage(Tank tank) {
        tank.accept(this);
    }
}
