function convert_in_acide(arn)
{
  codon_to_acide = {
    "UCU" : "Sérine",
    "UCC" : "Sérine",
    "UCA" : "Sérine",
    "UCG" : "Sérine",
    "AGU" : "Sérine",
    "AGC" : "Sérine",
    "CCU" : "Proline",
    "CCC" : "Proline",
    "CCA" : "Proline",
    "CCG" : "Proline",
    "UUA" : "Leucine",
    "UUG" : "Leucine",
    "UUU" : "Phénylalanine",
    "UUC" : "Phénylalanine",
    "CGU" : "Arginine",
    "CGC" : "Arginine",
    "CGA" : "Arginine",
    "CGG" : "Arginine",
    "AGA" : "Arginine",
    "AGG" : "Arginine",
    "UAU" : "Tyrosine",
    "UAC" : "Tyrosine"
  }
  codons = arn.match(/.{3}/g)
  return codons.map(codon => codon_to_acide[codon]).join("-")
}

console.log("CCGUCGUUGCGCUACAGC,", "\nresult ", convert_in_acide("CCGUCGUUGCGCUACAGC"), "\nexpected :", "Proline-Sérine-Leucine-Arginine-Tyrosine-Sérine")
console.log("CCUCGCCGGUACUUCUCG,", "\nresult ", convert_in_acide("CCUCGCCGGUACUUCUCG"), "\nexpected :", "Proline-Arginine-Arginine-Tyrosine-Phénylalanine-Sérine")

