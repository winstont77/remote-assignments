static int[] TwoSum(int[] nums, int target)
{
    
    Dictionary<int, int> complements = new Dictionary<int, int>();

    for (int i = 0; i < nums.Length; i++)
    {
        int complement = target - nums[i];

        
        if (complements.ContainsKey(complement))
        {
            
            return new int[] { complements[complement], i };
        }

        
        complements[nums[i]] = i;
    }

    return null;
}

int[] nums = { 2, 7, 11, 15 };
int target = 9;

int[] result = TwoSum(nums, target);
if (result != null)
{
    Console.WriteLine($"Indices: [{result[0]}, {result[1]}]");
}
else
{
    Console.WriteLine("No solution found.");
}