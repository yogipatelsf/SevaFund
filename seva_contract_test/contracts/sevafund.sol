pragma solidity ^0.4.21;

contract Sevafund {
 //the address of the contract creator
        address public charity;
        address beneficiary;
        address[] public donors;
        uint public goal;
        uint public fundNeeded;
        address addr = this;
        //keeping track of who gave what
        mapping (address => uint) public donations;
        
        
        
        constructor (address _payTo, uint _target) public {
            
            
            charity = msg.sender;
            beneficiary = _payTo;
            goal = _target * 1 ether; //needs conversion
            fundNeeded = _target * 1 ether;
            
        }
        
        //modifier adds some admin access to the owner
        modifier restricted() {
            require(msg.sender == charity);
            _;
        }
        
        function fundIt() public payable {
            require(msg.value > .01 ether); //donor can't send 0 amount!
                    donors.push(msg.sender);
                    donations[msg.sender] += msg.value;//update the table of donations
                    fundNeeded -= msg.value;//update the remaining
  
                
        }
        
        //refund the right amount to the right donor
        function refund (uint amount) returns (bool isFunded) {
            
            if (donations[msg.sender] < amount * 1 ether){
                return false;
            }
            
            
            msg.sender.transfer(amount * 1 ether);
            donations[msg.sender] -= amount * 1 ether;
            fundNeeded += amount * 1 ether;
            return true;
        }
        
        
        // transfer fund to the beneficiary
        function withdrawal() public restricted {
            require(addr.balance >= goal);
            beneficiary.transfer(addr.balance);
        }
        
        function getDonors() public view returns (address[]) {
           return donors;
        }
}




