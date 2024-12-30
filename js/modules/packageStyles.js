export function getPackageStyle(type) {
  switch (type) {
    case 'standard':
      return 'package-standard';
    case 'premium':
      return 'package-premium';
    case 'platinum':
      return 'package-platinum';
    case 'supplement':
      return 'package-supplement';
    default:
      return '';
  }
}