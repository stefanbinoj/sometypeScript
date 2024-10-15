interface Pingable {
    ping(): void;
  }
   
class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }
   
class Ball implements Pingable {
    //Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() {
      console.log("pong!");
    }
    ping(){
        throw new Error("Function not implemented.");
    }
  }
