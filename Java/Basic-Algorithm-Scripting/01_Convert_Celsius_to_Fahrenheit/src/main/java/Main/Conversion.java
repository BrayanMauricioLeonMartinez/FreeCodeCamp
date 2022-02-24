
package Main;

/**
 *
 * @author brayle
 */
public class Conversion {
    private double temperature;

    /**
     * @return the temperature
     */
    public double getTemperature() {
        return temperature;
    }

    /**
     * @param temperature the temperature to set
     */
    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }
    
    public double convertirCtoF(double temperatura){
        return temperatura * (9/5) + 32;
    }
    public double convertirFtoC(double temperatura){
        return (temperatura - 32) * (5/9);
    }
}
