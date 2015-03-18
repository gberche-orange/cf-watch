# cf-watch
shortcuts to ease watching and searching cf related activities 

* GitHub related organisations to [search](https://github.com/search/advanced?q=mysql+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&ref=searchresults&type=Repositories&utf8=%E2%9C%93) within, e.g
   * [q=mysql](https://github.com/search?utf8=%E2%9C%93&q=mysql+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&type=Repositories&ref=advsearch&l=)
   * [q=release](https://github.com/search?o=desc&q=release+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&ref=searchresults&s=updated&type=Repositories&utf8=%E2%9C%93)

   * [q=ssl](https://github.com/search?utf8=%E2%9C%93&q=ssl+description+path%3Ajobs%2F+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&type=Code&ref=searchresults) in release specs
* Google groups, e.g. [q=mysql](https://groups.google.com/a/cloudfoundry.org/forum/?fromgroups=#!topicsearch/mysql)
* Twitter, e.g. [q=mysql](https://twitter.com/search?q=mysql%20cloudfoundry&src=typd)
* Cf Pipeline log, e.g. [q=loggregator](https://www.google.fr/search?q=site:git-pipeline.cfapps.io+routing-api&ie=utf-8&oe=utf-8&gws_rd=cr&ei=QFcJVdXVA8u07gb__4DwBA#q=site:git-pipeline.cfapps.io+loggregator)
* Blogs e.g. [q=ldap](https://www.google.fr/search?q=ldap+site:blog.pivotal.io+OR+site:http://www.thisweekincf.com)   
* Distro manuals e.g. [q=mysql](https://www.google.fr/search?q=mysql+(site:docs.pivotal.io+OR+site:www.ng.bluemix.net/docs+OR+site:docs.stackato.com)))


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
* Leverage existing aggregator and social monitoring tools:
  *  initial list http://www.brandwatch.com/2014/04/top-8-great-value-social-media-analytics-tools/

## other sources

* product documentations
* cf community blogs
* this week in cf
* cloudfoundry google group (e.g. [mysql](https://groups.google.com/a/cloudfoundry.org/forum/?fromgroups=#!topicsearch/mysql) )
* pipelines
   * http://bosh_artifacts.cfapps.io/
   * http://git-pipeline.cfapps.io/pipelines/runtime (e.g. [loggregator](https://www.google.fr/search?q=site:git-pipeline.cfapps.io+routing-api&ie=utf-8&oe=utf-8&gws_rd=cr&ei=QFcJVdXVA8u07gb__4DwBA#q=site:git-pipeline.cfapps.io+loggregator) )
   * travis-ci
* youtube videos and transcripts ( eg [CFAD](https://www.youtube.com/api/timedtext?sparams=asr_langs%2Ccaps%2Cv%2Cexpire&expire=1426700408&caps=asr&hl=en-US&key=yttt1&signature=911C9CE963387B5FE74370C642A622094976AB2F.4D672E50A26B8815277CDE78B023039E3B150BFD&v=UQFU3tpWwiI&asr_langs=ru%2Ces%2Cnl%2Cpt%2Cko%2Cde%2Cit%2Cja%2Cen%2Cfr&type=track&lang=en&name&kind=asr&fmt=1) )
* trackers
  * API using specific project endpoints
     * ```/projects/{project_id}/stories?filter=mysql``` http://www.pivotaltracker.com/help/api/rest/v5#Stories , eg [mysql stories](https://www.pivotaltracker.com/services/v5/projects/969486/stories?filter=mysql) 
     * or [mysql search](https://www.pivotaltracker.com/services/v5/projects/969486/search?query=mysql), see  http://www.pivotaltracker.com/help/faq#howcanasearchberefined
     * aggregate among multiple projects, possibly using the [upcoming request aggregator](http://www.pivotaltracker.com/help/api/rest/v5#Request_Aggregator)
 * other future support ? see [related question](http://community.pivotaltracker.com/pivotal/topics/how-can-i-search-among-multiple-public-projects?rfm=1)
  

## twitter

 * eg [mysql](https://twitter.com/search?q=mysql%20cloudfoundry&src=typd)
