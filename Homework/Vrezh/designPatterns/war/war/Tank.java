package war;
import java.util.concurrent.TimeUnit;
import java.lang.InterruptedException;

public class Tank extends Moving {
    private String name;
    private String nationality;
    private Weapon weapon;
    private int lives;

    public Tank(String nm, int l, String nt, Weapon wp, float wd, float h) {
        super();
        name = nm;
        nationality = nt;
        weapon = wp;
        lives = l;
        width = wd;
        height = h;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }

    public void setNationality(String n) {
        nationality = n;
    }

    public String getNationality() {
        return nationality;
    }

    public void setWeapon(Weapon w) {
        weapon = w;
    }
    
    public Weapon getWeapon() {
        return weapon;
    }

    public void setLives(int l) {
        lives = l;
    }
    
    public int getLives() {
        return lives;
    }

    public Bullet shoot(float scoreVX, float scoreVY) {
        return weapon.shoot(scoreVX, scoreVY);
    }   
 
}
