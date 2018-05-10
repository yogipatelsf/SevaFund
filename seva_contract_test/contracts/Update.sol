pragma solidity ^0.4.17;

contract Sevafund {
 //the address of the contract creator
        address public charity;
        address beneficiary;
        // address[] public donors; changed
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
            
                
                if (addr.balance == goal) { 
                    selfdestruct(beneficiary);//if goal is reached send money
                }
                
                // if (msg.value + add.balance > goal){
                //  need to hundle the difference
                // }
           
                donations[msg.sender] += msg.value;//update the table of donations
                fundNeeded -= msg.value;//update the remaining
                
        }
        
        //refund the right amount to the right donor
        function refund (uint amount) returns (bool) {
            
            if (donations[msg.sender] < amount){
                return false;
            }
            
            address donor = msg.sender;
            donor.transfer(amount);
            donations[msg.sender] -= amount * 1 ether;
            fundNeeded+= amount * 1 ether;
            return true;
        }
        
        // transfer fund to the beneficiary
        function withdrawal() public restricted {
            require(goal == addr.balance);
            beneficiary.transfer(addr.balance);
        }
        
}




