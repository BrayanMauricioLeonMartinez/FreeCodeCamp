
package Main;

/**
 *
 * @author brayle
 */
public class Reverse {
    public String reverse(String str){
        String invertida = "";
        
        for(int i = str.length() -1; i>=0; i--){
            invertida += str.charAt(i);
        }
        
        System.out.println(str);
        return invertida;
    }
}
