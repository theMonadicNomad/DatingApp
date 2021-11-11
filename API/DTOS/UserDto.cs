using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOS
{
    //returned when a user registers or logins
    public class UserDto
    {
        public string Username { get; set; }
        public string Token { get; set; }

    }
}