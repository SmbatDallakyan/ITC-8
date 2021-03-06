/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chess;

import java.awt.Point;

/**
 *
 * @author nelli
 */
public class Rook extends Figure{

    public Rook(Point position, String color) {
        this.color = color;
        this.position = position;
    }


    @Override
    public boolean checkStep(Point newPosition) {
        int x = this.position.x;
        int y = this.position.y;
        int newX = newPosition.x;
        int newY = newPosition.y;
        int deltaX = Math.abs(newX - x);
        int deltaY = Math.abs(newY - y);
        
        if ((deltaX != 0 && deltaY == 0) || (deltaX == 0 && deltaY != 0)) {
            return true;
        }
        return false;
    }
    
}
