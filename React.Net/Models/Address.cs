using System.ComponentModel.DataAnnotations;

namespace React.Net.Models
{
    public class Address
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Street { get; set; }

        [Required]
        public string User { get; set; }

        [Required]
        public string UserId { get; set; }
    }
}
