# cf-watch
shortcuts to ease watching and searching cf related activities 

* Favorite organisations to [search](https://github.com/search/advanced?q=mysql+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&ref=searchresults&type=Repositories&utf8=%E2%9C%93) within, e.g
   * [q=mysql](https://github.com/search?utf8=%E2%9C%93&q=mysql+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&type=Repositories&ref=advsearch&l=)
   * [q=release](https://github.com/search?o=desc&q=release+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&ref=searchresults&s=updated&type=Repositories&utf8=%E2%9C%93)


   
# todo

## github

* more sources
  * wikis such as cf-community wikis
    * currently [custom google search query](https://github.com/cloudfoundry-community/cf-docs-contrib/wiki/Search)
    * https://github.com/linyows/github-wiki-search
    

* include as an extension of github search form
   * provide smart hiearchical groups of orgs/users ('official', 'distros', 'other pivotal', 'individuals')
   * ease date filtering with "last 10 days" 
   * ease following influencial users: comments, issues, commits (similar to github "Follow" feature)
   * ease file path searching e.g. "cf-release/jobs/**/spec" (example [spec](https://github.com/cloudfoundry/cf-release/blob/962d606ab8260f25af2c7ef335bd74b9e18a7169/jobs/login/spec#L28) )
* publish as an rss/newsfeed

Implementation-wise:
* html mashup to github.com/search
   * https://github.algolia.com/ instant search L&F, need to restrict to CF
* explore search API https://developer.github.com/v3/search/
   * example apps
     * https://github.com/jgallen23/hubsearch preview at http://projects.jga.me/hubsearch/#/Java/cloudfoundry
     * https://github.com/mapbox/github-org-browser preview at http://mapbox.github.io/github-org-browser/
     * https://github.com/DanaDowell/repo-search broken preview at https://rawgit.com/DanaDowell/repo-search/master/index.html
     * https://github.com/simonsmith/github-user-search preview at http://simonsmith.github.io/github-user-search/
     * https://github.com/databass/repowatcher preview at http://repowatcher.net/
     * https://github.com/gresrun/GHOrgBrowser (java)
   * libs
     * https://github.com/philschatz/octokat.js


## google search

* cf community blogs
* this week in cf
* cloudfoundry google group
* pipelines
   * http://bosh_artifacts.cfapps.io/
   * http://git-pipeline.cfapps.io/pipelines/runtime
   * travis-ci
* youtube

## twitter
