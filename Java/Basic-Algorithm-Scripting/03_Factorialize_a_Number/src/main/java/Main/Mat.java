
package Main;

/**
 *
 * @author brayle
 */
public class Mat {
    public double factor(double numero){
        if(numero == 1){
            return 1;
        }
        return this.factor(numero - 1) * numero;
    }
}
