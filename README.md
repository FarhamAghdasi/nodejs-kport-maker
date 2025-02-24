```markdown
# IP Range Combiner

A simple Node.js script to combine corresponding IP address ranges from two input files into a formatted output file.

## 📝 Description
This script reads IP addresses from two text files (`start.txt` and `end.txt`), pairs them line by line, and generates formatted IP ranges in `START_IP-END_IP` format. The combined results are saved to `ip_ranges_output.txt`.

## 🚀 Features
- Reads IP addresses from two separate files
- Creates formatted IP ranges (`192.168.1.1-192.168.1.255`)
- Handles basic error checking
- Preserves line order between input files
- Removes empty lines automatically

## ⚙️ Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- Basic command line knowledge

## 🛠️ Usage

1. **Prepare Input Files**  
   Create two text files in the script directory:
   - `start.txt` - Contains starting IP addresses (one per line)
   - `end.txt` - Contains ending IP addresses (one per line)

2. **Run the Script**  
   Execute from command line:
   ```bash
   node ip_range_combiner.js
   ```

3. **Get Output**  
   Results will be saved to `ip_ranges_output.txt`

## 📂 File Format Example

**start.txt**
```
192.168.1.1
10.0.0.5
172.16.0.1
```

**end.txt**
```
192.168.1.255
10.0.0.15
172.16.0.15
```

**ip_ranges_output.txt**
```
192.168.1.1-192.168.1.255
10.0.0.5-10.0.0.15
172.16.0.1-172.16.0.15
```

## ⚠️ Important Notes
1. Both files **must** have the same number of lines
2. Lines are matched by position (line 1 + line 1, line 2 + line 2, etc.)
3. Empty lines in input files will be ignored
4. Output file will be **overwritten** on each run
5. Script does NOT validate IP address formats

## 🛑 Error Handling
The script will alert you about:
- Missing input files
- File read/write errors
- Mismatched line counts between files

## 📄 License
This script is provided as-is without explicit license. For any production use or modification, please contact the author.
```

This README includes:
1. Clear usage instructions with examples
2. Prerequisites and requirements
3. Input/output format specifications
4. Error handling information
5. Important limitations and notes
6. File structure expectations

You might want to:
1. Rename the script file to `ip_range_combiner.js`
2. Create sample input files for testing
3. Add logging/error handling customization if needed
