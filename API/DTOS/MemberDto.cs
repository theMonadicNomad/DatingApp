using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOS
{
    public class MemberDto // to avoid the object cycle errror appuser (photo) - photo (appuser)
    {
        public int Id { get; set; }
        public string Username { get; set; } //okay to have small 'n'
        public string PhotoUrl { get; set; }


        public int Age { get; set; } // returns GetAge from AppUser as the return type and Get* is matching.

        public string KnownAs { get; set; }

        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }

    }
}